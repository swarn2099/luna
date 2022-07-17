import { PartialType } from '@nestjs/mapped-types';
import { CreateHueDto } from './create-hue.dto';

export class UpdateHueDto extends PartialType(CreateHueDto) {}
