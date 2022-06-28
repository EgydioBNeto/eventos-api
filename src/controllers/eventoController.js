import evento from "../models/Evento.js";


class eventoController {
  static novoEvento = (req, res) => {
    let eventos = new evento(req.body);
    eventos.save((err, evento) => {
      err
        ? res.status(400).send({
            message: `Não foi possível cadastrar o Evento! ${err}`,
          })
        : res.status(201).json({
            message: `Evento  ${evento.nome} cadastrado com sucesso!`,
          });
    });
  };

  static listarEvento = (req, res) => {
    evento
      .find((err, evento) => {
        err
          ? res.status(400).send({
              message: `Não foi possível listar Eventos! ${err}`,
            })
          : res.status(200).json(evento);
      })
  };

  static listarEventoData = (req, res) => {
    evento
      .find({ dataEvento: req.params.data }, (err, evento) => {
        err
          ? res.status(400).send({ message: `Não há Eventos! ${err}` })
          : res.status(200).json(evento);
      })
  };

  static listarEventosPassados = (req, res) => {
    let dataNormal = new Date();
    let dataEdit =
      dataNormal.getFullYear() +
      "-" +
      (dataNormal.getMonth() + 1) +
      "-" +
      dataNormal.getDate();
    evento
      .find({ data: { $lt: dataEdit } }, (err, evento) => {
        err
          ? res.status(400).send({ message: `Não há Eventos! ${err}` })
          : res.status(200).json(evento);
      })
  };

  static listarEventosFuturos = (req, res) => {
    let dataNormal = new Date();
    let dataEdit =
      dataNormal.getFullYear() +
      "-" +
      (dataNormal.getMonth() + 1) +
      "-" +
      dataNormal.getDate();
    evento
      .find({ data: { $gt: dataEdit } }, (err, evento) => {
        err
          ? res.status(400).send({ message: `Não há Eventos! ${err}` })
          : res.status(200).json(evento);
      })
  };

  static listarEventosHoje = (req, res) => {
    let month = new Date().getMonth() + 1;
    let todayMonth = month.toString();
    if (todayMonth < 10) todayMonth = "0" + month.toString();
    let today =
      new Date().getFullYear() + "-" + todayMonth + "-" + new Date().getDate();
    evento
      .find({ data: { $eq: today } }, (err, evento) => {
        err
          ? res.status(400).send({ message: `Não há Eventos! ${err}` })
          : res.status(200).json(evento);
      })
  };

  static listarEventoID = (req, res) => {
    const id = req.params.id;
    evento
      .findById(id, (err, evento) => {
        err
          ? res.status(400).send({
              message: `Não foi possível listar o Evento! ${err}`,
            })
          : res.status(200).json(evento);
      })
  };
  static atualizarEventoID = (req, res) => {
    const id = req.params.id;
    evento.findByIdAndUpdate(id, { $set: req.body }, (err, evento) => {
      err
        ? res.status(400).send({
            message: `Não foi possível atualizar o Evento! ${err}`,
          })
        : res.status(200).json({
            message: `Evento ${evento.nome} atualizado com sucesso!`,
          });
    });
  };

  static excluirEventoID = (req, res) => {
    const id = req.params.id;
    evento.findByIdAndDelete(id, (err, evento) => {
      err
        ? res.status(400).send({
            message: `Não foi possível deletar o Evento! ${err}`,
          })
        : res.status(200).json({
            message: `Evento ${evento.nome} deletado com sucesso!`,
          });
    });
  };
}

export default eventoController;
