import fs from 'fs';
import path from 'path';

interface ServerConfig {
  port: number;
}

const configPath = path.resolve(__dirname, '../server.config.json');
const rawConfig = fs.readFileSync(configPath, 'utf-8');
const config: ServerConfig = JSON.parse(rawConfig);

export default config;