import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { Livro } from './entities/livro.entity';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) { }

  @Post()
  create(@Body() dados: { titulo: string; autor: string; qtd_pagina: number }) {
    return this.livrosService.create(dados.titulo, dados.autor, dados.qtd_pagina);
  }

  @Get()
  findAll() {
    return this.livrosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.livrosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dados: Partial<Livro>) {
    return this.livrosService.update(+id, dados);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.livrosService.remove(+id);
  }
}
