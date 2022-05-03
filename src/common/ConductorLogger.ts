export interface ConductorLogger {
  info(...args: any): void
  error(...args: any): void
  debug(...args: any): void
}

// TODO: level?
export class DefaultLogger implements ConductorLogger {
  private tags: Object[]

  constructor(tags: object[] = []) {
    this.tags = tags
  }

  info = (...args: any): void => {
    console.log('INFO', ...this.tags, ...args)
  }

  debug = (...args: any): void => {
    console.log('DEBUG', ...this.tags, ...args)
  }

  error =(...args: any): void => {
    console.log('ERROR',...this.tags, ...args)
  }
}
