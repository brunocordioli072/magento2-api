import winston from "winston";
const date = new Date().toISOString();
const logFormat = winston.format.printf(function (info) {
  return `${date}-${info.level}: ${JSON.stringify(info.message, null, 4)}\n`;
});
export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: process.env.LOG_LEVEL || "info",
      format: winston.format.combine(winston.format.colorize(), logFormat),
    }),
  ],
});
