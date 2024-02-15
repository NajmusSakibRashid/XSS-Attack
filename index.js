const express=require(`express`);
const app=express();
const cors=require(`cors`);

app.use(cors());
app.use(express.static(`public`));

app.listen(3030);