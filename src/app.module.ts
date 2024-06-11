import { Module, OnModuleInit, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'hostname',
      port: 5432,
      username: 'user', // substitua pelo seu usuário
      password: 'senha', // substitua pela sua senha
      database: 'nomeDataBase', // substitua pelo nome do seu banco de dados
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // desative isso em produção
      migrationsRun: false, // desative a execução automática de migrações
      logging: ['query', 'error'], // habilitar logging para consultas e erros
    }),
    VehicleModule,
  ],
})
export class AppModule implements OnModuleInit {
  private readonly logger = new Logger(AppModule.name);

  async onModuleInit() {
    this.logger.log('AppModule initialized');
  }
}
