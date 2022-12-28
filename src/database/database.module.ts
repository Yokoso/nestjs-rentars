import { Module } from "@nestjs/common";
import { Connection } from "typeorm";
import { TypeOrmModule } from "@nestjs/typeorm";

import { typeOrmConfigAsync } from "../config/typeorm.config";

@Module({
    imports: [TypeOrmModule.forRootAsync(typeOrmConfigAsync)],
    exports: [TypeOrmModule]
})
export class DatabaseModule {
    constructor(private connection: Connection) {
        if (connection.isConnected) {
            console.log("DB connected successfully");
        }
    }
}