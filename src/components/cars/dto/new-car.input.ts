import { Field, InputType, Int } from "@nestjs/graphql";
import { Max, Min } from "class-validator";


@InputType()
export class NewCarInput {

    @Field()
    name: string;

    @Field(type => Int)
    @Min(10, { message: "Daily price can't be lower than 10" })
    @Max(1000, { message: "Monthly price can't be greater than 1000" })
    dailyPrice: number;

    @Field(type => Int)
    @Min(300, { message: "Monthly price can't be lower than 300" })
    @Max(30000, { message: "Monthly price can't be greater than 30000" })
    monthlyPrice: number;

    @Field()
    mileage: number;

    @Field()
    gasType: string;

    @Field()
    gearType: string;

    @Field()
    thumbnailUrl: string;
}