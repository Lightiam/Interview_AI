import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QueryModuleBase } from "./base/query.module.base";
import { QueryService } from "./query.service";
import { QueryController } from "./query.controller";
import { QueryResolver } from "./query.resolver";

@Module({
  imports: [QueryModuleBase, forwardRef(() => AuthModule)],
  controllers: [QueryController],
  providers: [QueryService, QueryResolver],
  exports: [QueryService],
})
export class QueryModule {}
