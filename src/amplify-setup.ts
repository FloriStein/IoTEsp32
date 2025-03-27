import { Amplify} from 'aws-amplify';
import { PubSub } from '@aws-amplify/pubsub';


// Apply plugin with configuration
const pubsub = new PubSub({
  region: 'eu-central-1',
  endpoint:
    'wss://a2tnej84qk5j60-ats.iot.eu-central-1.amazonaws.com/mqtt'
});
