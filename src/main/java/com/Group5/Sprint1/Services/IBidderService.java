package com.Group5.Sprint1.Services;

import com.Group5.Sprint1.Models.BidderModel;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public interface IBidderService {
    public boolean register(BidderModel userDetails) ;
    public boolean bid(Map<String,Integer> bidDetails,int bidderId);
    public boolean login(Map<String,String> loginDetails);

    List<BidderModel> showLeaderBoard();

}
