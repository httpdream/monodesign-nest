import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AdminModule } from './admin/admin.module';
import { ProjectsModule } from './projects/projects.module';
import { CounselingModule } from './counseling/counseling.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'image'),
      serveRoot: '/images',
    }),
    AdminModule,
    ProjectsModule,
    CounselingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
