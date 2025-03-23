use starknet::ContractAddress;

#[derive(Copy, Drop, Serde, Debug)]
#[dojo::model]
pub struct PlayerPerformance {
    #[key]
    pub player: ContractAddress,
    #[key]
    pub tournament_id: u64,
    #[key]
    pub match_external_id: felt252,
    pub match_date: u64,
    pub goals: u8,
    pub assists: u8,
    pub yellow_cards: u8,
    pub red_cards: u8,
    pub clean_sheet: bool,
    pub saves: u8,
    pub points: u16,
}

#[cfg(test)]
mod tests {
    use super::PlayerPerformance;
    use starknet::contract_address_const;
    use starknet::ContractAddress;

    #[test]
    #[available_gas(1000000)]
    fn test_player_performance_initialization() {
        // Use contract_address_const to create a mock address
        let mock_player: ContractAddress = contract_address_const::<0x123>();
        
        // Initialize the PlayerPerformance with test values
        let performance = PlayerPerformance {
            player: mock_player,
            tournament_id: 42_u64,
            match_external_id: 'MATCH123'_felt252,
            match_date: 1679529600_u64, // Some timestamp
            goals: 2_u8,
            assists: 1_u8,
            yellow_cards: 0_u8,
            red_cards: 0_u8,
            clean_sheet: false,
            saves: 0_u8,
            points: 25_u16,
        };

        // Verify the values were set correctly
        assert(performance.player == mock_player, 'Wrong player');
        assert(performance.tournament_id == 42_u64, 'Wrong tournament_id');
        assert(performance.match_external_id == 'MATCH123'_felt252, 'Wrong match_external_id');
        assert(performance.match_date == 1679529600_u64, 'Wrong match_date');
        assert(performance.goals == 2_u8, 'Wrong goals');
        assert(performance.assists == 1_u8, 'Wrong assists');
        assert(performance.yellow_cards == 0_u8, 'Wrong yellow_cards');
        assert(performance.red_cards == 0_u8, 'Wrong red_cards');
        assert(performance.clean_sheet == false, 'Wrong clean_sheet');
        assert(performance.saves == 0_u8, 'Wrong saves');
        assert(performance.points == 25_u16, 'Wrong points');
    }

    #[test]
    #[available_gas(1000000)]
    fn test_goalkeeper_performance() {
        // Test specifically for goalkeeper performance
        let mock_goalkeeper: ContractAddress = contract_address_const::<0x456>();
        
        let goalkeeper_performance = PlayerPerformance {
            player: mock_goalkeeper,
            tournament_id: 42_u64,
            match_external_id: 'MATCH456'_felt252,
            match_date: 1679529600_u64,
            goals: 0_u8,
            assists: 0_u8,
            yellow_cards: 0_u8,
            red_cards: 0_u8,
            clean_sheet: true,
            saves: 5_u8,
            points: 30_u16,
        };

        assert(goalkeeper_performance.clean_sheet == true, 'Should have clean sheet');
        assert(goalkeeper_performance.saves == 5_u8, 'Should have 5 saves');
    }

    #[test]
    #[available_gas(1000000)]
    fn test_card_penalties() {
        // Test a player who received cards
        let mock_player: ContractAddress = contract_address_const::<0x789>();
        
        let performance_with_cards = PlayerPerformance {
            player: mock_player,
            tournament_id: 42_u64,
            match_external_id: 'MATCH789'_felt252,
            match_date: 1679529600_u64,
            goals: 1_u8,
            assists: 0_u8,
            yellow_cards: 1_u8,
            red_cards: 1_u8,
            clean_sheet: false,
            saves: 0_u8,
            points: 5_u16, // Lower points due to cards
        };

        assert(performance_with_cards.yellow_cards == 1_u8, 'Should have yellow card');
        assert(performance_with_cards.red_cards == 1_u8, 'Should have red card');
    }
}