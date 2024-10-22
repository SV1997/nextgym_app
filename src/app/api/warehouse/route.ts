import { warehouseSchema } from "@/lib/validators/warehouseSchema";
import { PrismaClient, warehouse} from "@prisma/client";
const client= new PrismaClient();
export async function POST(req:Request, res:Response) {
    const reqData = await req.json();
    let validateData;
    try {
        validateData = warehouseSchema.parse(reqData);
    } catch (error) {
        return Response.json({message:error });
    }

    try{
        const newWarehouse = await client.warehouse.create({
            data:{
                name: validateData.name,
                pincode: Number(validateData.pincode)
            }
        })
        return Response.json({message:"warehouse created"},{status:201});
    }
    catch (error) {
        return Response.json({message:error},{status:500});
    }
}

export async function GET(req:Request, res:Response) {
    try {
        const warehouse = await client.warehouse.findMany();
        return Response.json(warehouse);
    } catch (error) {
        console.log(error)
        return Response.json({message:"unable to find warehouse data"},{status:500});
    }
}