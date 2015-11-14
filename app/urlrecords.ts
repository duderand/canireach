/*
 * Url Records
 */
import express = require('express');

export function getblocked(req: express.Request) {
    var blocked = {
        country: 'PT',
        recordtimestamp: new Date().toISOString(),
        list: []
    };

    blocked.list.push({ host: 'www.uber.com', imgtest: 'https://www.uber.com/favicon.ico' });
    blocked.list.push({ host: 'www.tvgolo.com', imgtest: 'http://www.tvgolo.com/favicon.ico' });
    blocked.list.push({ host: 'www.sportlemon.tv', imgtest: 'http://www.sportlemon.tv/favicon.ico' });
    blocked.list.push({ host: 'atdhe.eu', imgtest: 'http://atdhe.eu/favicon.ico' });
    blocked.list.push({ host: 'tvfree2.me', imgtest: 'http://tvfree2.me/favicon.ico' });
    blocked.list.push({ host: 'www.soinformatica.org', imgtest: 'http://www.soinformatica.org/favicon.ico' });
    blocked.list.push({ host: 'sporttvfree.com', imgtest: 'http://sporttvfree.com/favicon.ico' });
    blocked.list.push({ host: '1337x.to', imgtest: 'http://1337x.to/favicon.ico' });
    blocked.list.push({ host: 'btrev.net', imgtest: 'http://btrev.net/favicon.ico' });
    blocked.list.push({ host: 'dayt.se', imgtest: 'http://dayt.se/favicon.ico' });
    blocked.list.push({ host: 'extratorrent.cc', imgtest: 'http://extratorrent.cc/favicon.ico' });
    blocked.list.push({ host: 'forum-maximus.net', imgtest: 'http://forum-maximus.net/favicon.ico' });
    blocked.list.push({ host: 'gigatuga.com', imgtest: 'http://gigatuga.com/wp-content/uploads/2015/10/1.png' });
    blocked.list.push({ host: 'lusoshare.com', imgtest: 'http://lusoshare.com/wp-content/uploads/2015/04/logo1.png' });
    blocked.list.push({ host: 'megafilmeshd.net', imgtest: 'http://megafilmeshd.net/wp-content/themes/thema-novo/images/favicon.ico' });
    blocked.list.push({ host: 'osreformados.com', imgtest: 'http://osreformados.com/favicon.ico' });
    blocked.list.push({ host: 'piratatugafilmes.com', imgtest: 'http://piratatugafilmes.com/wp-content/uploads/2015/07/favicon.ico' });
    blocked.list.push({ host: 'poptuga.com', imgtest: 'http://poptuga.com/favicon.ico' });
    blocked.list.push({ host: 'revistas-jornais.blogspot.com', imgtest: 'http://revistas-jornais.blogspot.com/favicon.ico' });
    blocked.list.push({ host: 'revistas-jornais.blogspot.pt', imgtest: 'http://revistas-jornais.blogspot.pt/favicon.ico' });
    blocked.list.push({ host: 'seriestvix.tv', imgtest: 'http://seriestvix.tv/wp-content/uploads/2013/04/Logo1.png' });
    blocked.list.push({ host: 'thewatchseries.to', imgtest: 'http://thewatchseries.to/templates/default/images/favicon.ico' });
    blocked.list.push({ host: 'toppt.net', imgtest: 'http://toppt.net/wp-content/themes/Mundo/images/favicon.png' });
    blocked.list.push({ host: 'torrentreactor.com', imgtest: 'http://torrentreactor.com/favicon.ico' });
    blocked.list.push({ host: 'tuga.io', imgtest: 'http://tuga.io/images/favicon.png' });
    blocked.list.push({ host: 'tugaanimado.net', imgtest: 'http://tugaanimado.net/wp-content/themes/metro-creativex/images/pt_standard.png' });
    blocked.list.push({ host: 'tugaflix.com', imgtest: 'http://tugaflix.com/favicon.ico' });
    blocked.list.push({ host: 'watchseries.lt', imgtest: 'http://watchseries.lt/favicon.ico' });
    blocked.list.push({ host: 'www.baixartv.com', imgtest: 'http://www.baixartv.com/wp-content/mbp-favicon/favicon113.ico' });
    blocked.list.push({ host: 'www.cinefilmesonline.net', imgtest: 'http://www.cinefilmesonline.net/wp-content/themes/cinefilmesonline2/favicon.png' });
    blocked.list.push({ host: 'www.elitedosfilmes.com', imgtest: 'http://www.elitedosfilmes.com/wp-content/themes/elitedosfilmes/images/favicon.ico' });
    blocked.list.push({ host: 'www.filmesonline2.com', imgtest: 'http://www.filmesonline2.com/wp-content/themes/filmesonline/images/filme.png' });
    blocked.list.push({ host: 'www.filmesonlinegratis.net', imgtest: 'http://www.filmesonlinegratis.net/favicon.ico' });
    blocked.list.push({ host: 'www.lusofilmesonline.com', imgtest: 'http://www.lusofilmesonline.com/favicon.ico' });
    blocked.list.push({ host: 'www.primewire.ag', imgtest: 'http://www.primewire.ag/favicon.ico' });
    blocked.list.push({ host: 'www.rpds-download.org', imgtest: 'http://www.rpds-download.org/images/favicon.ico' });
    blocked.list.push({ host: 'www.scnsrc.me', imgtest: 'http://www.scnsrc.me/favicon.ico' });
    blocked.list.push({ host: 'www.seriesvideobb.com', imgtest: 'http://www.seriesvideobb.com/wp-content/themes/seriesvideobb/favicon.ico' });
    blocked.list.push({ host: 'www.sharetuga.com', imgtest: 'http://www.sharetuga.com/favicon.ico' });
    blocked.list.push({ host: 'www.torrenthound.com', imgtest: 'http://www.torrenthound.com/favicon.ico' });
    blocked.list.push({ host: 'www.tuga-filmes.info', imgtest: 'http://www.tuga-filmes.info/favicon.ico' });
    blocked.list.push({ host: 'www.warez-box.net', imgtest: 'http://www.warez-box.net/uploads/monthly_2015_09/popcorn_full.ico.6ad8cd140e7b407b3d29c5f6b60126b2.ico' });
    blocked.list.push({ host: 'www.watchseries.li', imgtest: 'http://www.watchseries.li/favicon.ico' });
    blocked.list.push({ host: 'filmesonlineportugueses.wordpress.com', imgtest: 'https://filmesonlineportugueses.wordpress.com/favicon.ico' });
    blocked.list.push({ host: 'isohunt.to', imgtest: 'https://isohunt.to/favicon.ico' });
    blocked.list.push({ host: 'kat.cr', imgtest: 'https://kat.cr/favicon.ico' });
    blocked.list.push({ host: 'piratebay.to', imgtest: 'https://piratebay.to/favicon.ico' });
    blocked.list.push({ host: 'rarbg.to', imgtest: 'https://rarbg.to/favicon.ico' });
    blocked.list.push({ host: 'ratotv.net', imgtest: 'https://ratotv.net/favicon.ico' });
    blocked.list.push({ host: 'thepiratebay.la', imgtest: 'https://thepiratebay.la/favicon.ico' });
    blocked.list.push({ host: 'tugahd.com', imgtest: 'http://tugahd.com/templates/yoo_nite/favicon.ico' });
    blocked.list.push({ host: 'www.serieshared.blogspot.pt', imgtest: 'http://www.serieshared.blogspot.pt/favicon.ico' });
    blocked.list.push({ host: 'tudodownloadpt-pt2.blogspot.pt', imgtest: 'http://tudodownloadpt-pt2.blogspot.pt/favicon.ico' });
    blocked.list.push({ host: 'amofilmes.net', imgtest: 'http://amofilmes.net/wp-content/uploads/favicon1.ico' });
    blocked.list.push({ host: 'avxhome.se', imgtest: 'http://avxhome.se/favicon.ico' });
    blocked.list.push({ host: 'bitsnoop.com', imgtest: 'http://bitsnoop.com/favicon.ico' });
    blocked.list.push({ host: 'dramatize.com', imgtest: 'http://dramatize.com/favicon.ico' });
    blocked.list.push({ host: 'ilovefilmesonline.com', imgtest: 'http://ilovefilmesonline.com/wp-content/uploads/2015/05/Untitled-5.png' });
    blocked.list.push({ host: 'megafilmeshd.tv', imgtest: 'http://megafilmeshd.tv/wp-content/themes/megafilmeshdtv/favicon.png' });
    blocked.list.push({ host: 'megafilmesonline.net', imgtest: 'http://megafilmesonline.net/wp-content/themes/fog/favicon.png' });
    blocked.list.push({ host: 'sanet.me', imgtest: 'http://sanet.me/favicon.ico' });
    blocked.list.push({ host: 'sceper.ws', imgtest: 'http://sceper.ws/favicon.ico' });
    blocked.list.push({ host: 'series-cravings.me', imgtest: 'http://series-cravings.me/wp-content/uploads/2015/01/111.png' });
    blocked.list.push({ host: 'topdezfilmes.org', imgtest: 'http://topdezfilmes.org/wp-content/uploads/2014/03/icone.png' });
    blocked.list.push({ host: 'toptorrent.org', imgtest: 'http://toptorrent.org/wp-content/uploads/2015/03/totorrnetlogo.png' });
    blocked.list.push({ host: 'www.armagedomfilmes.biz', imgtest: 'http://www.armagedomfilmes.biz/favicon.ico' });
    blocked.list.push({ host: 'www.baixartorrent.net', imgtest: 'http://www.baixartorrent.net/wp-content/uploads/2015/08/cropped-favicon.png' });
    blocked.list.push({ host: 'www.cucirca.eu', imgtest: 'http://www.cucirca.eu/favicon.ico' });
    blocked.list.push({ host: 'www.ddlvalley.rocks', imgtest: 'http://www.ddlvalley.rocks/favicon.ico' });
    blocked.list.push({ host: 'www.filmesdetv.com', imgtest: 'http://www.filmesdetv.com/images/favicon.ico' });
    blocked.list.push({ host: 'www.megafilmesonlinehd.com', imgtest: 'http://www.megafilmesonlinehd.com/favicon.ico' });
    blocked.list.push({ host: 'www.onlinemovies-pro.com', imgtest: 'http://www.onlinemovies-pro.com/wp-content/uploads/onlinemovies%20pro.png' });
    blocked.list.push({ host: 'www.rlslog.net', imgtest: 'http://www.rlslog.net/favicon.ico' });
    blocked.list.push({ host: 'www.seedpeer.eu', imgtest: 'http://www.seedpeer.eu/favicon.ico' });
    blocked.list.push({ host: 'www.supercineonline.com', imgtest: 'http://www.supercineonline.com/wp-content/themes/supercineonline/favicon.ico' });
    blocked.list.push({ host: 'www.telona.org', imgtest: 'http://www.telona.org/wp-content/themes/telonar/apple-touch-icon-precomposed.png' });
    blocked.list.push({ host: 'www.torlock.com', imgtest: 'http://www.torlock.com/favicon.ico' });
    blocked.list.push({ host: 'www.torrentfunk.com', imgtest: 'http://www.torrentfunk.com/favicon.ico' });
    blocked.list.push({ host: 'www.torrents.net', imgtest: 'http://www.torrents.net/favicon.ico' });
    blocked.list.push({ host: 'www.tubeplus.is', imgtest: 'http://www.tubeplus.is/favicon.ico' });
    blocked.list.push({ host: 'www.tuga-filmes.com', imgtest: 'http://www.tuga-filmes.com/wp-content/uploads/2015/09/aviso-720x405.jpg' });
    blocked.list.push({ host: 'yourbittorrent.com', imgtest: 'https://yourbittorrent.com/favicon.ico' });
    blocked.list.push({ host: 'mp3skull.online', imgtest: 'http://mp3skull.online/favicon.ico' });
    blocked.list.push({ host: 'megapirata.net', imgtest: 'http://megapirata.net/templates/templight/images/favicon.ico' });

    return blocked;
};