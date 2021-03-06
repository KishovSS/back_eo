import { Injectable } from '@nestjs/common';

import { User } from './interface/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

/* import { usersList } from '../datebase/users/usersList'; */

@Injectable()
export class UsersService {
    private usersList: User[] = [
        {
            id: 1,
            username: 'Иванов Иван Иванович',
            position: 'Начальник отдела',
            email: 'ivanov-ii@kontora.ru',
            phoneInternal: 857781500,
            address: 'Самара, Московское шоссе, 270В',
            office: 'B.1.04.010',
        },
        {
            id: 2,
            username: 'Петров Александр Григорьевич',
            position: 'Руководитель направления',
            email: 'petrov-ag@kontora.ru',
            phoneInternal: 857781501,
            address: 'Самара, Московское шоссе, 270В',
            office: 'B.1.04.011',
        },
        {
            id: 3,
            username: 'Григорьев Василий Петрович',
            position: 'Главный инженера',
            email: 'grigoriev-vp@kontora.ru',
            phoneInternal: 857781510,
            address: 'Самара, Московское шоссе, 270В',
            office: 'B.1.04.020',
        },
        {
            id: 4,
            username: 'Комарова Ирина Михайловна',
            position: 'Ведущий инженера',
            email: 'komarova-im@kontora.ru',
            phoneInternal: 857781521,
            address: 'Самара, Московское шоссе, 270В',
            office: 'B.1.04.031',
        },
        {
            id: 5,
            username: 'Сурганова Юлия Александровна',
            position: 'Старший инженер',
            email: 'surganova-yua@kontora.ru',
            phoneInternal: 857781522,
            address: 'Самара, Московское шоссе, 270В',
            office: 'B.1.04.033',
        },
        {
            id: 6,
            username: 'Устинов Анатолий Анатольевич',
            position: 'Старший инженер',
            email: 'ustinov-aa@kontora.ru',
            phoneInternal: 857781533,
            address: 'Самара, Московское шоссе, 270В',
            office: 'B.1.04.035',
        },
        {
            id: 7,
            username: 'Карпаткина Ольга Викторовна',
            position: 'Менеджер',
            email: 'karpatkina-ov@kontora.ru',
            phoneInternal: 857781550,
            address: 'Самара, Московское шоссе, 270В',
            office: 'B.1.04.050',
        },
    ];

    getAllUsers() {
        return this.usersList;
    };

    findUser(name: string) {
        let findedUser = null;
        this.usersList.map(user => {
            if (user.username.includes(name)) {
                findedUser = user;
            };
        });
        return findedUser;
    }

    createUser(newUser: User) {
        this.usersList.push(newUser);
    }
}
