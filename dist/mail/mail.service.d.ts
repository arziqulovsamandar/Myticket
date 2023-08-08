import { Admin } from '../admin/models/admin.model';
import { MailerService } from '@nestjs-modules/mailer';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendAdminConfirmation(admin: Admin): Promise<void>;
}
