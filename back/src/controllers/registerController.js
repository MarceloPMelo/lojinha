const prisma = require('../prismaClient');
const bcrypt = require('bcryptjs');

async function registrarUsuario(req, res) {
  const { nome, email, senha, dataNascimento, genero } = req.body;

  try {
    const usuarioExistente = await prisma.user.findUnique({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({ error: 'Email já cadastrado' });
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    const novoUsuario = await prisma.user.create({
      data: {
        nome,
        email,
        senha: senhaHash,
        dataNascimento: new Date(dataNascimento),
        genero
      }
    });

    res.status(201).json({
      id: novoUsuario.id,
      nome: novoUsuario.nome,
      email: novoUsuario.email,
      dataNascimento: novoUsuario.dataNascimento,
      genero: novoUsuario.genero,
      criadoEm: novoUsuario.criadoEm
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
}

module.exports = { registrarUsuario };