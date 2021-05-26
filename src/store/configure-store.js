import prodStore from './configure-store.prod';
import devStore from './configure-store.dev';

const isProd = (process.env.NODE_ENV === 'production');

export default (isProd ? prodStore : devStore);
