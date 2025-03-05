use starknet::{ContractAddress};
use starkfantasy::models::vec2::Vec2;

#[derive(Copy, Drop, Serde, Debug)]
#[dojo::model]
pub struct Position {
    #[key]
    pub player: ContractAddress,
    pub vec: Vec2,
}
