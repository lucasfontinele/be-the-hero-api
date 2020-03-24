import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

require('colors');

function write(type, text) {
  const tag = {
    success: '[+]'.green,
    danger: '[-]'.red,
    info: '[i]'.blue,
    warning: '[!]'.yellow,
  };

  const date = () => {
    const [day, month, year, horary] = format(new Date(), 'dd-MM-yyyy-HH:ss', {
      locale: ptBR,
    }).split('-');

    return ` [${day}/${month}/${year} ${horary}] `;
  };

  console.log(tag[type] + date() + text);
}

export default write;
