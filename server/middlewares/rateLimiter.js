import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 5, // Allow 5 attempts per 10 minutes
  message: { message: "Too many attempts. Please try again after 10 minutes." },
});
