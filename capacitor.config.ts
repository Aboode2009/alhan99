import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.alhan.music',
  appName: 'Music Player',
  webDir: 'dist',
  server: {},
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
