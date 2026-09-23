"use strict";

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;
const siteDir = path.join(__dirname, "_site");

// Security headers applied to every response
app.use((_req, res, next) => {
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; style-src 'self'; script-src 'self'; img-src 'self' data:"
  );
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  next();
});

app.use(
  express.static(siteDir, {
    setHeaders: (res, filePath) => {
      const relativePath = path.relative(siteDir, filePath).split(path.sep).join("/");

      if (/^assets\/.*\.(css|js|svg)$/i.test(relativePath)) {
        res.setHeader("Cache-Control", "public, max-age=3600, must-revalidate");
      }
    },
  })
);

app.listen(port);
