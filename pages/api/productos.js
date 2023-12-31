import { mongooseConnect } from '@/lib/mongoose';
import { Producto } from '@/models/Producto';


export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === 'POST') {
    const { title, description, price, images} = req.body;

    const productDoc = await Producto.create({
      title,
      description,
      price,   
      images   
    })

    res.json(productDoc);
  }
  if(method === 'GET'){
    if(req.query.id){
      res.json(await Producto.findById(req.query.id));
      
    }else{
      res.json(await Producto.find());
    }
  }
  if(method === 'PUT'){
    const { title, description, price, images, _id} = req.body;
    await Producto.updateOne({_id}, {
      title, description, price, images
    });
    res.json(true);

  }

  if(method === 'DELETE'){
    if(req.query.id){
      await Producto.deleteOne({_id: req.query.id})
      res.json(true)
    }
  }

  
}