import { ApiProperty } from "@nestjs/swagger";

export class FileTestDto {
    @ApiProperty()
    public message: string;

    constructor(msg: string) {
        this.message = msg || ''
    }
}