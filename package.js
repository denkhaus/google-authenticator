Package.describe("Google-Authenticator package");

Package.on_use(function (api) {
  api.add_files(['google_otp.js'], 'server');
  if(api.export)
    api.export('GoogleOTPAPI');
});

Npm.depends({
  "notp": "2.0.1"
});
