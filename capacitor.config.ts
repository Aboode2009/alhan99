import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.79b3c8cba5394175848cc0fb069432a5',
  appName: 'youtube-tarab-player',
  webDir: 'dist',
  server: {
    url: 'https://79b3c8cb-a539-4175-848c-c0fb069432a5.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    BackgroundRunner: {
      label: 'com.alhaan.music.background',
      src: 'background-runner.js',
      event: 'backgroundTaskEvent',
      repeat: true,
      interval: 15,
      autoStart: false
    }
  }
};

export default config;
