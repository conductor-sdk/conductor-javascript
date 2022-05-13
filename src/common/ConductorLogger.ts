export interface ConductorLogger {
  info(...args: any): void
  error(...args: any): void
  debug(...args: any): void
}

const levels = {
  DEBUG: 10,
  INFO: 30,
  ERROR: 60
} as const

export class DefaultLogger implements ConductorLogger {
  private tags: Object[]
  private level: number = 30

  constructor(tags: object[] = []) {
    this.tags = tags
  }

  private log (level: keyof typeof levels, ...args: any) {
    let resolvedLevel: number
    let name = level
    if (level in levels) {
      resolvedLevel = levels[level]
    } else {
      name = "INFO"
      resolvedLevel = levels.INFO
    }
    if (resolvedLevel > this.level) {
      console.log(name, ...this.tags, ...args)
    }
  }

  info = (...args: any): void => {
    this.log("INFO", ...args)
  }

  debug = (...args: any): void => {
    this.log("DEBUG", ...args)
  }

  error =(...args: any): void => {
    this.log("ERROR", ...args)
  }
}
