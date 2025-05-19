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

async function getUser(req, res) {
    const userId = req.user.id; // ✅ ID seguro, vem do token JWT validado
  
    try {
      const usuario = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          nome: true,
          email: true,
          dataNascimento: true,
          genero: true,
          criadoEm: true,
        }
      });
  
      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
  
      res.json(usuario);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
  }
  

async function editUser (req, res) {
    const userId = req.user.id; // ✅ ID seguro, vem do token JWT validado
    const {nome, email, senha, dataNascimento, genero } = req.body;

    try {
        const usuarioExistente = await prisma.user.findUnique({ where: { id: userId } });
        if (!usuarioExistente) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        const senhaHash = await bcrypt.hash(senha, 10);

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                nome,
                email,
                senha: senhaHash,
                dataNascimento: new Date(dataNascimento),
                genero
            }
        });

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
}

async function deleteUser (req, res) {
    const id = req.body.id

    try {
        const usuario = await prisma.user.delete({
            where: { id }
        });

        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.status(200).json(usuario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
}

module.exports = { registrarUsuario, getUser, editUser, deleteUser };