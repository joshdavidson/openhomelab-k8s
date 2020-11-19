import { App } from 'cdk8s';
import {BitwardenChart} from "./bitwarden";
import {BookStackChart} from "./bookstack";
import {CiaoChart} from "./ciao";
import {CyberChefChart} from "./cyberchef";
import {FlexGetChart} from "./flexget";
import {GapsChart} from "./gaps";
import {GrafanaChart} from "./grafana";
import {GrocyChart} from "./grocy";
import {HeimdallChart} from "./heimdall";
import {HomeAssistantChart} from "./homeassistant";
import {HomerChart} from "./homer";
import {HuginnChart} from "./huginn";
import {InfluxDbChart} from "./influxdb";
import {JackettChart} from "./jackett";
import {JellyfinChart} from "./jellyfin";
import {KomgaChart} from "./komga";
import {LazyLibrarianChart} from "./lazylibrarian";
import {LidarrChart} from "./lidarr";
import {MariaDbChart} from "./mariadb";
import {MinecraftChart} from "./minecraft";
import {MinecraftBedrockChart} from "./minecraft-bedrock";
import {MongoDbChart} from "./mongo";
import {MonitorrChart} from "./monitorr";
import {MylarChart} from "./mylar";
import {MySqlChart} from "./mysql";
import {ObserviumChart} from "./observium";
import {PerkeepChart} from "./perkeep";
import {PhpServerMonChart} from "./phpservermon";
import {PostgresChart} from "./postgres";
import {RadarrChart} from "./radarr";
import {RanetoChart} from "./raneto";
import {ReadarrChart} from "./readarr";
import {SickGearChart} from "./sickgear";
import {SmokePingChart} from "./smokeping";
import {SonarrChart} from "./sonarr";
import {StuffInSpaceChart} from "./stuffinspace";
import {TautulliChart} from "./tautulli";
import {TransmissionChart} from "./transmission";
import {TriliumChart} from "./trilium";
import {VsCodeChart} from "./vscode";
import {WallabagChart} from "./wallabag";
import {WekanChart} from "./wekan";

const app = new App();
new BitwardenChart(app, 'bitwarden');
new BookStackChart(app, 'bookstack');
new CiaoChart(app, 'ciao');
new CyberChefChart(app, 'cyberchef');
new FlexGetChart(app, 'flexget');
new GapsChart(app, 'gaps');
new GrafanaChart(app, 'grafana');
new GrocyChart(app, 'grocy');
new HeimdallChart(app, 'heimdall');
new HomeAssistantChart(app, 'homeassistant');
new HomerChart(app, 'homer');
new HuginnChart(app, 'huginn');
new InfluxDbChart(app, 'influxdb');
new JackettChart(app, 'jackett');
new JellyfinChart(app, 'jellyfin');
new KomgaChart(app, 'komga');
new LazyLibrarianChart(app, 'lazylibrarian');
new LidarrChart(app, 'lidarr');
new MariaDbChart(app, 'mariadb');
new MinecraftChart(app, 'minecraft');
new MinecraftBedrockChart(app, 'minecraft-bedrock');
new MongoDbChart(app, 'mongo');
new MonitorrChart(app, 'monitorr');
new MylarChart(app, 'mylar');
new MySqlChart(app, 'mysql');
new ObserviumChart(app, 'observium');
new PerkeepChart(app, 'perkeep');
new PhpServerMonChart(app, 'phpservermon');
new PostgresChart(app, 'postgres');
new RadarrChart(app, 'radarr');
new RanetoChart(app, 'raneto');
new ReadarrChart(app, 'readarr');
new SickGearChart(app, 'sickgear');
new SmokePingChart(app, 'smokeping');
new SonarrChart(app, 'sonarr');
new StuffInSpaceChart(app, 'stuffinspace');
new TautulliChart(app, 'tautulli');
new TransmissionChart(app, 'transmission');
new TriliumChart(app,'trilium');
new VsCodeChart(app, 'vscode');
new WallabagChart(app, 'wallabag');
new WekanChart(app, 'wekan');

app.synth();
