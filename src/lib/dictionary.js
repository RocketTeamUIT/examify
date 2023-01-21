import { dictionary } from './base';

export function getWordAudioService(word) {
  return dictionary.get('/' + word);
}
