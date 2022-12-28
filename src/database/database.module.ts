import { Module } from "@nestjs/common";
import { Connection } from "typeorm";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: process.env.DB_PASSWORD,
        database: 'rentars',
        entities: [],
        synchronize: true
      })],
    exports: [TypeOrmModule]
})
export class DatabaseModule {
    constructor(private connection: Connection) {
        if (connection.isConnected) {
            console.log("DB connected successfully");
        }
    }
}