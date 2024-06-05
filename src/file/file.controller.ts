import { Controller, Get, Header, Inject, Res, StreamableFile } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Response } from 'express'
import { FileTestDto } from './file.dto'
import { createReadStream } from "fs";
import { resolve, dirname } from "path";
import { IFile } from "./file.interface";

import { file_size } from '../utils'

@Controller('file')
@ApiTags('File')
export class FileController {
    constructor(
        @Inject('IFile') private readonly fileService: IFile
    ) {}

    @Get('test')
    @ApiOkResponse({ type: FileTestDto })
    @ApiOperation({ summary: '测试' })
    public async get(): Promise<FileTestDto> {
        const str =  await this.fileService.addFile()

        return new FileTestDto(str)
    }


    @Get('download')
    // @Header('Content-Disposition', 'attachment; filename="tt.rar"')
    @ApiOperation({ summary: '测试下载' })
    public async download(@Res({ passthrough: true }) res: Response): Promise<StreamableFile> {

        // const file_path = resolve(__dirname, '../../../nn.rar')
        const file_path = resolve(__dirname, '../../../bigData.rar')
        // const file_path = resolve(__dirname, '../../../nest_pro.tar.gz')

        const fileSize = await file_size(file_path)
        console.log('file_path: ', file_path)
        const file = createReadStream(file_path)

        // /mnt/d/workspace/work/node-space/src/express/assets/tt.rar

        res.set({
            'Content-Disposition': 'attachment; filename="bigData.rar"'
        })

        const stream = new StreamableFile(file, { length: fileSize });

        return stream
    }
}