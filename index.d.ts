declare module 'wav-dummy' {
	export default function wavDummy(nbSeconds: number, nbChannels: number = 2, sampleRate: number = 44100): ArrayBuffer;
}
