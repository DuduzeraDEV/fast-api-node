import mongoose, { mongo } from 'mongoose';
import { uuid } from 'uuid/v4';

const UsuarioSchema = new mongoose.Schema(
    {
        id: { type: String, default: uuid },
        pessoa_id: String,
        login: String,
        senha: String,
        tipo: String,
    },
    {
        timestamps: true,
    },
    {
        collection: 'usuario',
    },
);

export default mongoose.model('Usuario', UsuarioSchema, 'usuario');
