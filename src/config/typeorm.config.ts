// import { ConfigService } from "@nestjs/config";
// import { TypeOrmModuleOptions } from "@nestjs/typeorm";

// export const typeOrmConfig = (
//   configService: ConfigService,
// ): TypeOrmModuleOptions => ({
//   type: 'postgres',
//   host: configService.get<string>('DB_HOST'),
//   port: Number(configService.get('DB_PORT')),
//   username: configService.get<string>('DB_USERNAME'),
//   password: configService.get<string>('DB_PASSWORD'),
//   database: configService.get<string>('DB_DATABASE'),
//   schema: configService.get<string>('DB_SCHEMA') ?? 'public',

//   ssl: false, // 👈 CORRETO

//   autoLoadEntities: true,
//   synchronize: true,
// });

import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get<string>('DB_HOST'),
  port: Number(configService.get('DB_PORT')),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_DATABASE'),
  schema: configService.get<string>('DB_SCHEMA') ?? 'public',

  // SSL: necessário para Neon em produção
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,

  autoLoadEntities: true, // carrega automaticamente entidades
  synchronize: true, // cria tabelas automaticamente (bom para dev)
});
