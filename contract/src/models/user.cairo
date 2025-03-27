use starknet::ContractAddress;

#[derive(Copy, Drop, Serde)]
#[dojo::model]
struct User {
    #[key]
    id: ContractAddress,
    username: felt252,
    tournaments_won: u16,
    created_at: u64,
    last_connection: u64,
}

#[cfg(test)]
mod tests {
    use starknet::contract_address_const;
    use super::User;

    #[test]
    fn test_user_creation() {
        let user1 = User {
            id: contract_address_const::<0x1234>(),
            username: 'username',
            tournaments_won: 3,
            created_at: 1710000000,
            last_connection: 1710500000,
        };
        assert_eq!(user1.id, contract_address_const::<0x1234>());
        assert_eq!(user1.username, 'username');
        assert_eq!(user1.tournaments_won, 3);
        assert_eq!(user1.created_at, 1710000000);
        assert_eq!(user1.last_connection, 1710500000);
    }

    #[test]
    fn test_user_equality() {
        let user1 = User {
            id: contract_address_const::<0x1234>(),
            username: 'username1',
            tournaments_won: 3,
            created_at: 1710000000,
            last_connection: 1710500000,
        };

        let user2 = User {
            id: contract_address_const::<0x1234>(),
            username: 'username1',
            tournaments_won: 3,
            created_at: 1710000000,
            last_connection: 1710500000,
        };

        let user3 = User {
            id: contract_address_const::<0x5678>(),
            username: 'username2',
            tournaments_won: 5,
            created_at: 1711000000,
            last_connection: 1711500000,
        };

        assert_eq!(user1.id, user2.id);
        assert_eq!(user1.username, user2.username);
        assert_ne!(user1.id, user3.id);
        assert_ne!(user1.username, user3.username);
    }
}
