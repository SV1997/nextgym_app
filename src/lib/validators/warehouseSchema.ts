import { z } from "zod"

export const warehouseSchema = z.object({
    name:z.string({message: 'warehouse name is required'}),
    pincode: z.string({message: 'warehouse pincode is required'}).length(6),
})