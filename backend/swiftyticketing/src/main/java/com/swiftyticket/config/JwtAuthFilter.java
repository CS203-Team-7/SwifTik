package com.swiftyticket.config;

import java.io.IOException;

import lombok.extern.slf4j.Slf4j;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.swiftyticket.exceptions.JWTExpiredException;
import com.swiftyticket.services.JwtService;
import com.swiftyticket.services.UserService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
@Slf4j
public class JwtAuthFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserService userService;

    // Below is the filter chain we make that uses jwt authentication to allow users or not:
    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response, @NonNull FilterChain filterChain)
            throws ServletException, IOException {
        
                // First of all we need to get the token from the request:
                final String authHeader = request.getHeader("Authorization");
                String jwtToken;
                final String userEmail;
                // Here we have to check if the there is no authorization token or if it isn't a jwt token (JWT Tokens start with Bearer ):
                // If it is true, then there is no filtering necessary from the JWT:
                if(authHeader == null || !authHeader.startsWith("Bearer ")){
                    filterChain.doFilter(request, response);
                    return;
                }
                // Here we have to begin the process of validating the token:
                jwtToken = authHeader.substring(7);
                userEmail = jwtService.extractUserName(jwtToken); // This is the method we implemented in the jwtServiceImpl
                // As long as the email isn't empty and the authentication of that email is ok that means there is a user email associated to the token:
                if(!userEmail.isEmpty() && SecurityContextHolder.getContext().getAuthentication() == null){
                    // We fill in the user details into the spring security class of UserDetail
                    UserDetails userDetails = userService.userDetailsService().loadUserByUsername(userEmail);
                    // Now we check if the token itself is valid or not:
                    if(jwtService.isTokenValid(jwtToken, userDetails)){
                        // Then we go ahead and authorize:
                        SecurityContext context = SecurityContextHolder.createEmptyContext();
                        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken
                                                                        (userDetails, null, userDetails.getAuthorities());
                        authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                        context.setAuthentication(authToken);
                        SecurityContextHolder.setContext(context);
                        log.info("" + context);
                    } else {
                        throw new JWTExpiredException(userEmail + " token has expired, Please login again");
                    }
                }
                // Then finally we go back to the security filterchain since it has been authorized here:
                filterChain.doFilter(request, response);

    }
    
}
