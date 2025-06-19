import { Injectable } from "@nestjs/common";

@Injectable()
export class SnowflakeService {
  // Epoch (1 de janeiro de 2024)
  private readonly epoch = 1704067200000;
  private readonly workerIdBits = 5;
  private readonly sequenceBits = 12;

  private readonly maxWorkerId = -1 ^ (-1 << this.workerIdBits);
  private readonly sequenceMask = -1 ^ (-1 << this.sequenceBits);

  // O ID do worker deve ser único por instância da sua aplicação
  private workerId = 1;
  private sequence = 0;
  private lastTimestamp = -1;

  constructor() {
    if (this.workerId > this.maxWorkerId || this.workerId < 0) {
      throw new Error(`Worker ID must be between 0 and ${this.maxWorkerId}`);
    }
  }

  private tilNextMillis(lastTimestamp: number): number {
    let timestamp = Date.now();
    while (timestamp <= lastTimestamp) {
      timestamp = Date.now();
    }
    return timestamp;
  }

  generate(): bigint {
    let timestamp = Date.now();

    if (this.lastTimestamp === timestamp) {
      this.sequence = (this.sequence + 1) & this.sequenceMask;
      if (this.sequence === 0) {
        timestamp = this.tilNextMillis(this.lastTimestamp);
      }
    } else {
      this.sequence = 0;
    }

    this.lastTimestamp = timestamp;

    const id =
      (BigInt(timestamp - this.epoch) << BigInt(this.workerIdBits + this.sequenceBits)) |
      (BigInt(this.workerId) << BigInt(this.sequenceBits)) |
      BigInt(this.sequence);

    return id;
  }
}
