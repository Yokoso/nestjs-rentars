import { Field, InputType, Int } from "@nestjs/graphql";
import { Max, Min, IsNotEmpty, Length, Contains } from "class-validator";

@InputType()
export class NewCarInput {

    @Field()
    @IsNotEmpty()
    @Length(3, 26)
    name: string;

    @Field(type => Int)
    @IsNotEmpty()
    @Min(10, { message: "Daily price can't be lower than 10" })
    @Max(1000, { message: "Monthly price can't be greater than 1000" })
    dailyPrice: number;

    @Field(type => Int)
    @IsNotEmpty()
    @Min(300, { message: "Monthly price can't be lower than 300" })
    @Max(30000, { message: "Monthly price can't be greater than 30000" })
    monthlyPrice: number;

    @Field(type => Int)
    @IsNotEmpty()
    mileage: number;

    @Field()
    @IsNotEmpty()
    gasType: string;

    @Field()
    @IsNotEmpty()
    gearType: string;

    @Field()
    @IsNotEmpty()
    @Contains('https://')
    thumbnailUrl: string;
}