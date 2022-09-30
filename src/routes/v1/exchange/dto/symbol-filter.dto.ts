import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SymbolFilterDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  symbol: string;
}
