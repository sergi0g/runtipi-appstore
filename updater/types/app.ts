import { type Data } from './cup';

export interface AppConfig {
  version: string;
  tipi_version: number;
  updated_at: number;
  [key: string]: unknown;
}

export interface DockerService {
  name: string;
  image: string;
  isMain?: boolean;
  [key: string]: unknown;
}

export interface DockerCompose {
  services: DockerService[];
  [key: string]: unknown;
}

export interface UpdateInfo {
  appId: string;
  oldVersion: string;
  newVersion: string;
  updates: {
    service: string;
    oldImage: string;
    newImage: string;
    updateType: 'major' | 'minor' | 'patch' | null;
  }[];
}
