/**
 * Synthesizes ambient nostalgic youth piano chords using Web Audio API
 */
class TrailerAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private timer: number | null = null;

  public init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playNostalgicChord(freqs: number[], duration = 3.5) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    freqs.forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Sine wave with slight triangle warmth
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.08 / (idx + 1), now + idx * 0.08 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + duration + 0.2);
    });
  }

  public startAtmosphere(onChordChange?: (chordIndex: number) => void) {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;

    // Fmaj7 -> Em7 -> Dm7 -> Cmaj7 chords in Hz
    const progressions = [
      [174.61, 261.63, 329.63, 392.00], // Fmaj7
      [164.81, 246.94, 293.66, 392.00], // Em7
      [146.83, 220.00, 261.63, 349.23], // Dm7
      [130.81, 196.00, 246.94, 329.63], // Cmaj7
    ];

    let chordIdx = 0;
    const playNext = () => {
      if (!this.isPlaying) return;
      this.playNostalgicChord(progressions[chordIdx], 3.8);
      onChordChange?.(chordIdx);
      chordIdx = (chordIdx + 1) % progressions.length;
      this.timer = window.setTimeout(playNext, 4000);
    };

    playNext();
  }

  public stopAtmosphere() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const audioEngine = new TrailerAudioEngine();
