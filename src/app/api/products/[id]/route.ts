import { productSchema } from "@/lib/validators/productSchema";
import { writeFile } from "node:fs/promises";
import {PrismaClient,products} from "@prisma/client"
import path from "node:path";
const client = new PrismaClient();
export async function GET(req: Request, res: Response, {params}:{params:{id:string}}) {
    const id = params.id;
  try {const product = await client.products.findUnique(
   { where:{
        id:Number(id)
    }}
  );
  if(!product){
    return Response.json({message:"product not found"}, {status:400})
  }
  return Response.json(product, {status:200})

}
  catch (error) {
    return Response.json({message:error}, {status:500})
  }

 
}