import "reflect-metadata";
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver } from "@nestjs/apollo";

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, GraphQLModule.forRoot({
    driver: ApolloDriver,
    playground: (process.env.NODE_ENV === "development" && true) || false,
    debug: (process.env.NODE_ENV === "development" && true) || false,
    autoSchemaFile: true,
  }) ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
