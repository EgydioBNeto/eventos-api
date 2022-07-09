import evento from "../models/Evento.js";


class eventoController {
  static novoEvento = (req, res) => {
    const { nome, descricao, palavraChave, categoria, local, usuario } =
      req.body;
    const data = new Date(req.body.data + ":00.000Z");
    let eventos = new evento({
      nome,
      data,
      descricao,
      palavraChave,
      categoria,
      local,
      usuario,
    });
    eventos.save((err, evento) => {
      err
        ? res.status(400).send({
            message: `Não foi possível cadastrar o Evento! ${err}`,
          })
        : res.status(201).json({
            message: `Evento  ${evento.nome} cadastrado com sucesso!`,
            id: evento._id,
          });
    });
  };

  static listarEvento = (req, res) => {
    evento.find((err, evento) => {
      err
        ? res.status(400).send({
            message: `Não foi possível listar Eventos! ${err}`,
          })
        : res.status(200).json(evento);
    });
  };

  static listarEventoData = (req, res) => {
    evento.find({ data: req.params.data }, (err, evento) => {
      err
        ? res.status(400).send({ message: `Não há Eventos! ${err}` })
        : res.status(200).json(evento);
    });
  };

  static listarEventoPeriodo = (req, res) => {
    evento.find(
      { data: { $gte: req.body.dataInicio, $lte: req.body.dataFim } },
      (err, evento) => {
        err
          ? res.status(400).send({ message: `Não há Eventos! ${err}` })
          : res.status(200).json(evento);
      }
    );
  };

  static listarEventosPassados = (req, res) => {
    let month = new Date().getMonth() + 1;
    let todayMonth = month.toString();
    let todayday = new Date().getDate();
    if (todayday < 10) {
      todayday = "0" + todayday.toString();
    }
    if (todayMonth < 10) todayMonth = "0" + month.toString();
    let hour1 = "T00:00:00.000Z";

    let today1 =
      new Date().getFullYear() + "-" + todayMonth + "-" + todayday + hour1;

    evento
      .find({ data: { $lt: today1 } }, (err, evento) => {
        err
          ? res.status(400).send({ message: `Não há Eventos! ${err}` })
          : res.status(200).json(evento);
      })
      .limit(10);
  };

  static listarEventosFuturos = (req, res) => {
    let month = new Date().getMonth() + 1;
    let todayMonth = month.toString();
    let todayday = new Date().getDate();
    if (todayday < 10) {
      todayday = "0" + todayday.toString();
    }
    if (todayMonth < 10) todayMonth = "0" + month.toString();
    let hour2 = "T23:59:59.999Z";
    let today2 =
      new Date().getFullYear() + "-" + todayMonth + "-" + todayday + hour2;

    evento.find({ data: { $gt: today2 } }, (err, evento) => {
      err
        ? res.status(400).send({ message: `Não há Eventos! ${err}` })
        : res.status(200).json(evento);
    });
  };

  static listarEventosHoje = (req, res) => {
    let month = new Date().getMonth() + 1;
    let todayMonth = month.toString();
    let todayday = new Date().getDate();
    if (todayday < 10) {
      todayday = "0" + todayday.toString();
    }
    if (todayMonth < 10) todayMonth = "0" + month.toString();
    let hour1 = "T00:00:00.000Z";
    let hour2 = "T23:59:59.999Z";

    let today1 =
      new Date().getFullYear() + "-" + todayMonth + "-" + todayday + hour1;
    let today2 =
      new Date().getFullYear() + "-" + todayMonth + "-" + todayday + hour2;

    evento.find({ data: { $gte: today1, $lte: today2 } }, (err, evento) => {
      err
        ? res.status(400).send({ message: `Não há Eventos! ${err}` })
        : res.status(200).json(evento);
    });
  };

  static listarEventoID = (req, res) => {
    const id = req.params.id;
    evento.findById(id, (err, evento) => {
      err
        ? res.status(400).send({
            message: `Não foi possível listar o Evento! ${err}`,
          })
        : res.status(200).json(evento);
    });
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
