import { Controller, Get, Param } from "routing-controllers";
import {Injector} from "../../helper/decorator/injection/injector";
import {MarkRepository} from "../repository/mark.repository";

@Controller("/source")
export class SourceController {

    @Get("")
    public async getAllAsync(): Promise<any> {
        return Injector.resolve<MarkRepository>(MarkRepository).getAllAsync();
    }

    @Get("/:id")
    public async getAsync(@Param("id") id: string): Promise<any> {
        return "heheheh" + id;
    }

/*
    @Post("/upload")
    public async uploadAsync(@Body() source: any): Promise<any> {
        return "heheheh";
    }

    @Delete("/:id")
    public async deleteAsync(@Req() request: any, @Res() response: any): Promise<any> {
        return "heheheh";
    }

    @Post("/files")
    saveFile(@UploadedFile("fileName", { options: fileUploadOptions }) file: any) {
    }*/
}

/*
export const fileUploadOptions = () => {
    storage: multer.diskStorage({
        destination: (req: any, file: any, cb: any) => { ...
        },
        filename: (req: any, file: any, cb: any) => { ...
        }
    }),
        fileFilter: (req: any, file: any, cb: any) => { ...
    },
        limits: {
        fieldNameSize: 255,
            fileSize: 1024 * 1024 * 2
    }
};*/
