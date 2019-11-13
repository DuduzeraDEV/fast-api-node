import mongoose, { mongo } from "mongoose";
import { uuid } from "uuid/v4";

const PessoaSchema = new mongoose.Schema(
  {
    id: { type: String, default: uuid },
    nome: String,
    sobrenome: String,
    data_nascimento: Date,
    telefone: String
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Pessoa", PessoaSchema);
